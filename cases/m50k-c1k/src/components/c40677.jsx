import React from 'react';
const LABEL_40677 = 'component_40677';
export function Component40677({ value = 40677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40677, 'data-value': derived.doubled }, children);
}
export default Component40677;
