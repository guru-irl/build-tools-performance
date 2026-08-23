import React from 'react';
const LABEL_46230 = 'component_46230';
export function Component46230({ value = 46230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46230, 'data-value': derived.doubled }, children);
}
export default Component46230;
