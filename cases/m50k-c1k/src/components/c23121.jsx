import React from 'react';
const LABEL_23121 = 'component_23121';
export function Component23121({ value = 23121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23121, 'data-value': derived.doubled }, children);
}
export default Component23121;
