import React from 'react';
const LABEL_40993 = 'component_40993';
export function Component40993({ value = 40993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40993, 'data-value': derived.doubled }, children);
}
export default Component40993;
