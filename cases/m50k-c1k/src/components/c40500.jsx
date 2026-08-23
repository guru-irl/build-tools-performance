import React from 'react';
const LABEL_40500 = 'component_40500';
export function Component40500({ value = 40500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40500, 'data-value': derived.doubled }, children);
}
export default Component40500;
