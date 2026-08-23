import React from 'react';
const LABEL_19889 = 'component_19889';
export function Component19889({ value = 19889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19889, 'data-value': derived.doubled }, children);
}
export default Component19889;
