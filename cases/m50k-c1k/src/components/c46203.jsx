import React from 'react';
const LABEL_46203 = 'component_46203';
export function Component46203({ value = 46203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46203, 'data-value': derived.doubled }, children);
}
export default Component46203;
