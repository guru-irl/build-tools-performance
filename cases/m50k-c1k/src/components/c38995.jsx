import React from 'react';
const LABEL_38995 = 'component_38995';
export function Component38995({ value = 38995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38995, 'data-value': derived.doubled }, children);
}
export default Component38995;
