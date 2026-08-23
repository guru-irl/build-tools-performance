import React from 'react';
const LABEL_8381 = 'component_8381';
export function Component8381({ value = 8381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8381, 'data-value': derived.doubled }, children);
}
export default Component8381;
