import React from 'react';
const LABEL_11863 = 'component_11863';
export function Component11863({ value = 11863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11863, 'data-value': derived.doubled }, children);
}
export default Component11863;
