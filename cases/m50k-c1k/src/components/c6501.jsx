import React from 'react';
const LABEL_6501 = 'component_6501';
export function Component6501({ value = 6501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6501, 'data-value': derived.doubled }, children);
}
export default Component6501;
