import React from 'react';
const LABEL_43670 = 'component_43670';
export function Component43670({ value = 43670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43670, 'data-value': derived.doubled }, children);
}
export default Component43670;
