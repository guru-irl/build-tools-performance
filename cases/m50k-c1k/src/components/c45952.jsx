import React from 'react';
const LABEL_45952 = 'component_45952';
export function Component45952({ value = 45952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45952, 'data-value': derived.doubled }, children);
}
export default Component45952;
