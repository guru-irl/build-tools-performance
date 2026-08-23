import React from 'react';
const LABEL_37386 = 'component_37386';
export function Component37386({ value = 37386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37386, 'data-value': derived.doubled }, children);
}
export default Component37386;
