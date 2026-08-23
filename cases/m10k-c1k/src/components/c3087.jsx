import React from 'react';
const LABEL_3087 = 'component_3087';
export function Component3087({ value = 3087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3087, 'data-value': derived.doubled }, children);
}
export default Component3087;
