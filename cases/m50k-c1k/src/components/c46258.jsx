import React from 'react';
const LABEL_46258 = 'component_46258';
export function Component46258({ value = 46258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46258, 'data-value': derived.doubled }, children);
}
export default Component46258;
