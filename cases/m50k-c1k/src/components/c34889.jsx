import React from 'react';
const LABEL_34889 = 'component_34889';
export function Component34889({ value = 34889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34889, 'data-value': derived.doubled }, children);
}
export default Component34889;
