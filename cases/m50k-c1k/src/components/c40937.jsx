import React from 'react';
const LABEL_40937 = 'component_40937';
export function Component40937({ value = 40937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40937, 'data-value': derived.doubled }, children);
}
export default Component40937;
