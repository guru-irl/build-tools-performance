import React from 'react';
const LABEL_42889 = 'component_42889';
export function Component42889({ value = 42889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42889, 'data-value': derived.doubled }, children);
}
export default Component42889;
