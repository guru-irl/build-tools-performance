import React from 'react';
const LABEL_46547 = 'component_46547';
export function Component46547({ value = 46547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46547, 'data-value': derived.doubled }, children);
}
export default Component46547;
