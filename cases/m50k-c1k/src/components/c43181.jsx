import React from 'react';
const LABEL_43181 = 'component_43181';
export function Component43181({ value = 43181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43181, 'data-value': derived.doubled }, children);
}
export default Component43181;
