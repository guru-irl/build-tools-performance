import React from 'react';
const LABEL_38889 = 'component_38889';
export function Component38889({ value = 38889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38889, 'data-value': derived.doubled }, children);
}
export default Component38889;
