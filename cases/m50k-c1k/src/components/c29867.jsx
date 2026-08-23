import React from 'react';
const LABEL_29867 = 'component_29867';
export function Component29867({ value = 29867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29867, 'data-value': derived.doubled }, children);
}
export default Component29867;
