import React from 'react';
const LABEL_46739 = 'component_46739';
export function Component46739({ value = 46739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46739, 'data-value': derived.doubled }, children);
}
export default Component46739;
