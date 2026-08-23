import React from 'react';
const LABEL_36084 = 'component_36084';
export function Component36084({ value = 36084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36084, 'data-value': derived.doubled }, children);
}
export default Component36084;
