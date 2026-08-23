import React from 'react';
const LABEL_11820 = 'component_11820';
export function Component11820({ value = 11820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11820, 'data-value': derived.doubled }, children);
}
export default Component11820;
