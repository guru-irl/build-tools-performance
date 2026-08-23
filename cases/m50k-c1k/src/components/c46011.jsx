import React from 'react';
const LABEL_46011 = 'component_46011';
export function Component46011({ value = 46011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46011, 'data-value': derived.doubled }, children);
}
export default Component46011;
