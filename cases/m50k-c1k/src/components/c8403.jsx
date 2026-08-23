import React from 'react';
const LABEL_8403 = 'component_8403';
export function Component8403({ value = 8403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8403, 'data-value': derived.doubled }, children);
}
export default Component8403;
