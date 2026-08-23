import React from 'react';
const LABEL_39224 = 'component_39224';
export function Component39224({ value = 39224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39224, 'data-value': derived.doubled }, children);
}
export default Component39224;
