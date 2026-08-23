import React from 'react';
const LABEL_43843 = 'component_43843';
export function Component43843({ value = 43843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43843, 'data-value': derived.doubled }, children);
}
export default Component43843;
