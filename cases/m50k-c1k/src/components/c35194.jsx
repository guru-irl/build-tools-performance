import React from 'react';
const LABEL_35194 = 'component_35194';
export function Component35194({ value = 35194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35194, 'data-value': derived.doubled }, children);
}
export default Component35194;
