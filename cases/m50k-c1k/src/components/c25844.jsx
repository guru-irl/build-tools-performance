import React from 'react';
const LABEL_25844 = 'component_25844';
export function Component25844({ value = 25844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25844, 'data-value': derived.doubled }, children);
}
export default Component25844;
