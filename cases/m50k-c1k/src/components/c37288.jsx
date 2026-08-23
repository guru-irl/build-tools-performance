import React from 'react';
const LABEL_37288 = 'component_37288';
export function Component37288({ value = 37288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37288, 'data-value': derived.doubled }, children);
}
export default Component37288;
