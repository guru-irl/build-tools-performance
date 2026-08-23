import React from 'react';
const LABEL_14995 = 'component_14995';
export function Component14995({ value = 14995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14995, 'data-value': derived.doubled }, children);
}
export default Component14995;
