import React from 'react';
const LABEL_7121 = 'component_7121';
export function Component7121({ value = 7121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7121, 'data-value': derived.doubled }, children);
}
export default Component7121;
