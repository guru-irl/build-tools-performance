import React from 'react';
const LABEL_37245 = 'component_37245';
export function Component37245({ value = 37245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37245, 'data-value': derived.doubled }, children);
}
export default Component37245;
