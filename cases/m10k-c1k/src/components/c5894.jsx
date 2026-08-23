import React from 'react';
const LABEL_5894 = 'component_5894';
export function Component5894({ value = 5894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5894, 'data-value': derived.doubled }, children);
}
export default Component5894;
