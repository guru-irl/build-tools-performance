import React from 'react';
const LABEL_40480 = 'component_40480';
export function Component40480({ value = 40480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40480, 'data-value': derived.doubled }, children);
}
export default Component40480;
