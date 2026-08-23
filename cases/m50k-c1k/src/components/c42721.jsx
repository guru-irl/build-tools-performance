import React from 'react';
const LABEL_42721 = 'component_42721';
export function Component42721({ value = 42721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42721, 'data-value': derived.doubled }, children);
}
export default Component42721;
