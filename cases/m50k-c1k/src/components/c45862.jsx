import React from 'react';
const LABEL_45862 = 'component_45862';
export function Component45862({ value = 45862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45862, 'data-value': derived.doubled }, children);
}
export default Component45862;
