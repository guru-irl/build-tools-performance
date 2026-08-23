import React from 'react';
const LABEL_22235 = 'component_22235';
export function Component22235({ value = 22235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22235, 'data-value': derived.doubled }, children);
}
export default Component22235;
