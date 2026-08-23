import React from 'react';
const LABEL_16936 = 'component_16936';
export function Component16936({ value = 16936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16936, 'data-value': derived.doubled }, children);
}
export default Component16936;
