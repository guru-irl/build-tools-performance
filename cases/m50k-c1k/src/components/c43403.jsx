import React from 'react';
const LABEL_43403 = 'component_43403';
export function Component43403({ value = 43403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43403, 'data-value': derived.doubled }, children);
}
export default Component43403;
