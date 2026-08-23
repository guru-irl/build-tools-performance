import React from 'react';
const LABEL_28547 = 'component_28547';
export function Component28547({ value = 28547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28547, 'data-value': derived.doubled }, children);
}
export default Component28547;
