import React from 'react';
const LABEL_25863 = 'component_25863';
export function Component25863({ value = 25863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25863, 'data-value': derived.doubled }, children);
}
export default Component25863;
