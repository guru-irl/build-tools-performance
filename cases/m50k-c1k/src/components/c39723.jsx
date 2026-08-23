import React from 'react';
const LABEL_39723 = 'component_39723';
export function Component39723({ value = 39723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39723, 'data-value': derived.doubled }, children);
}
export default Component39723;
