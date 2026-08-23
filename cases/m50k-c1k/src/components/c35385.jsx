import React from 'react';
const LABEL_35385 = 'component_35385';
export function Component35385({ value = 35385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35385, 'data-value': derived.doubled }, children);
}
export default Component35385;
