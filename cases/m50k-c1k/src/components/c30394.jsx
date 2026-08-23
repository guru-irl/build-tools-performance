import React from 'react';
const LABEL_30394 = 'component_30394';
export function Component30394({ value = 30394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30394, 'data-value': derived.doubled }, children);
}
export default Component30394;
