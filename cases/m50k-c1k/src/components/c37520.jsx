import React from 'react';
const LABEL_37520 = 'component_37520';
export function Component37520({ value = 37520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37520, 'data-value': derived.doubled }, children);
}
export default Component37520;
