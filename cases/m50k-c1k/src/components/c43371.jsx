import React from 'react';
const LABEL_43371 = 'component_43371';
export function Component43371({ value = 43371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43371, 'data-value': derived.doubled }, children);
}
export default Component43371;
