import React from 'react';
const LABEL_19987 = 'component_19987';
export function Component19987({ value = 19987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19987, 'data-value': derived.doubled }, children);
}
export default Component19987;
