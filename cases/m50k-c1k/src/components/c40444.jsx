import React from 'react';
const LABEL_40444 = 'component_40444';
export function Component40444({ value = 40444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40444, 'data-value': derived.doubled }, children);
}
export default Component40444;
