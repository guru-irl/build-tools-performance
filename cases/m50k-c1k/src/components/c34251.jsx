import React from 'react';
const LABEL_34251 = 'component_34251';
export function Component34251({ value = 34251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34251, 'data-value': derived.doubled }, children);
}
export default Component34251;
