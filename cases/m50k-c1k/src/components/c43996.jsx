import React from 'react';
const LABEL_43996 = 'component_43996';
export function Component43996({ value = 43996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43996, 'data-value': derived.doubled }, children);
}
export default Component43996;
