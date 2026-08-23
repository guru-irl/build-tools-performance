import React from 'react';
const LABEL_1913 = 'component_1913';
export function Component1913({ value = 1913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1913, 'data-value': derived.doubled }, children);
}
export default Component1913;
