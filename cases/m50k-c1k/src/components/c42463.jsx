import React from 'react';
const LABEL_42463 = 'component_42463';
export function Component42463({ value = 42463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42463, 'data-value': derived.doubled }, children);
}
export default Component42463;
