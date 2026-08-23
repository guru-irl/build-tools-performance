import React from 'react';
const LABEL_45420 = 'component_45420';
export function Component45420({ value = 45420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45420, 'data-value': derived.doubled }, children);
}
export default Component45420;
